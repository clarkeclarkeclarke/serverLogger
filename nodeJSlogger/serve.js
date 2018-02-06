const server=require('node-http-server');
const config=new server.Config;

config.port=8000;

server.onRawRequest=gotRequest;

server.deploy(config);


function gotRequest(request,response,serve){
    console.log(request.uri,request.headers);

    serve(
        request,
        response,
        JSON.stringify(
            {
                uri:request.uri,
                headers:request.headers
            }
        )
    );

    return true;
}
