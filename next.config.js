module.exports = () => {
  return {
    reactStrictMode: true,
    images: {
      domains: ["api.cooperativaoyikil.com.ar", "cooperativaoyikil.com.ar", "www.cooperativaoyikil.com.ar"]
    },
    env: {
      ISPC_CLIENTURI: process.env.ISPC_CLIENTURI, //to-do: agregar el resto de enviroment variables. ya ta ya
      ISPC_APITOKEN: process.env.ISPC_APITOKEN,
      ISPC_APIKEY: process.env.ISPC_APIKEY,
      API_CLIENTLOGINURI: process.env.API_CLIENTLOGINURI,
      API_LOGOUTURI: process.env.API_LOGOUTURI,
      API_ADMINLOGINURI: process.env.API_ADMINLOGINURI,
      API_POSTEOS: process.env.API_POSTEOS,
      API_SOURCEIMAGELINK: process.env.API_SOURCEIMAGELINK,
      API_GETPOSTEOS: process.env.API_GETPOSTEOS,
      GOOGLE_SITEKEY: process.env.GOOGLE_SITEKEY,
    }
  };
};




