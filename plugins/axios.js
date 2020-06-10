export default function ({$axios}) {
  $axios.onRequest(config => {
    if(!process.server) {
      config.headers.token = 'token1'
    }
  })
}