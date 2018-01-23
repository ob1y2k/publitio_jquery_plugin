(function ($, window, document) {
  const url = 'https://api.publit.io/v1'
  const version = '1.0'
  let key, secret

  if (!window.jQuery) {
    throw new Error('In order to use publit.io jQuery api, you need to load jQuery first.')
  }

  if (!window.CryptoJS) {
    throw new Error('In order to use publit.io jQuery api, you need to load CryptoJS first.')
  }

  let methods = {

    init (k, s) {
      key = k
      secret = s
    },

    version () {
      return version
    },

    serialize (obj) {
      let str = []
      for (let property in obj) {
        if (obj.hasOwnProperty(property)) {
          str.push(`${encodeURIComponent(property)}=${encodeURIComponent(obj[property])}`)
        }
      }
      return str.join('&')
    },

    mtRand (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    
    pad (number, str) {
      return (str + Array(number).join('0')).slice(0, number)
    },

    timestamp () {
      if (!Date.now) {
        Date.now = () => { return Math.floor(new Date().getTime() / 1000) }
      }
      return Math.floor(Date.now() / 1000)
    },

    apiNonce () {
      return this.pad(8, this.mtRand(0, 99999999))
    },
    
    sha1 (sbs) {
       return CryptoJS.SHA1(`${sbs}${secret}`)
    },

    createUrl (call, args = []) {
      args = this.appendArguments(args)
      return `${url}${call}?${this.serialize(args)}`
    },

    appendArguments (args) {
      args.api_nonce = this.apiNonce()
      args.api_timestamp = this.timestamp()
      args.api_key = key
      args.api_signature = this.sign(args)

      return args
    },

    sign (args) {
      let { api_timestamp, api_nonce } = args
      let sbs = `${api_timestamp}${api_nonce}`

      return this.sha1(sbs)
    },

    getUrlForFileCreation (action, args) {
      let callUrl = ''
      if (action === 'file') {
        callUrl = this.createUrl('/files/create', args)
      } else if (action === 'watermark') {
        callUrl = this.createUrl('/watermarks/create', args)
      }
      return callUrl
    },

    call (call, method = 'GET', args = []) {
      let callUrl = this.createUrl(call, args)

      return this.callApi(callUrl, method)
        .catch((error) => { throw error })
    },

    callApi (callUrl, method) {
      switch (method) {
        case 'GET': case 'POST': case 'PUT': case 'DELETE':
          return $.ajax({
            type: method,
            url: callUrl,
          }).catch((error) => { throw error })

        default:
          return new Promise(() => {
            throw new Error('Wrong method name.')
          })
      }
    },

    uploadFile(file, callUrl) {
      const formData = new FormData()
      formData.append('file', file)

      return $.ajax({
        type: 'POST',
        url: callUrl,
        data: formData,
        processData: false,
        contentType: false
      }).fail((error) => { throw error })
    }
  }

  $.fn.publitio = {
    call (callUrl, method, args = []) {
      return methods.call(callUrl, method, args)
        .catch((error) => { throw error })
    },

    version () {
      return methods.version()
    },

    init (k, s) {
      methods.init(k, s)
    },

    uploadFile (file, action = 'file', args = []) {
      let callUrl = methods.getUrlForFileCreation(action, args)
      return methods.uploadFile(file, callUrl)
        .catch((error) => { throw error })
    },

    uploadRemoteFile (action = 'file', args = []) {
      let callUrl = methods.getUrlForFileCreation(action, args)
      return methods.callApi(callUrl, 'POST')
        .catch((error) => { throw error })
    }
  }

  $.publitio = $.fn.publitio

}(window.jQuery, window, document))
