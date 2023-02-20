function parseUrl(url) {
  if (url === undefined || url === null || url.trim() === "") {
    return null;
  } 
    
  const parse = new URL(url);
  let protocol = parse.protocol.replace(':', '');
  let hostname = parse.hostname;

  let port = parse.port;
  if (port === undefined || port === null || port === "") {
    if (protocol === "http") {
      port = "80";
    } else if (protocol === "https") {
      port = "443";
    }
  }

  let path = parse.pathname;
  let search = parse.search;

  let queries = [];
  if (search !== undefined && search !== null && search !== "") {
    let params = search.split("?")[1].split("&");
    
    for (let i = 0; i < params.length; i++) {
      let param = params[i].split("=");
      let query = { name: param[0], value: param[1] };
      queries.push(query);
    }
  }

  return {protocol, hostname, port, path, queries};
}

let url = "http://www.example.com:3000/test?version=1&test=true";
