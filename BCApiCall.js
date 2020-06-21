var request = require("request");
auth = require('./ApiKey.json');
TextBody =
'<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">' +
'    <Body>' +
'<GetCustomersWithFilter xmlns="urn:microsoft-dynamics-schemas/codeunit/GetCustomers">' +
'<noRange>10000</noRange>'+
'<customers>' +
//'<Customer xmlns="urn:microsoft-dynamics-nav/xmlports/x84000">'+
//'<No_>[string]</No_>'+
//'<Name>[string]</Name>'+
//'</Customer>'+
'</customers>'+
'</GetCustomersWithFilter>'+
'    </Body>'+
'</Envelope>';
var options = {
  url: 'https://api.businesscentral.dynamics.com/v2.0/d7cb5e81-c522-4647-8410-7aceac79e5a3/Sandbox/WS/CRONUS%20ES/Codeunit/GetCustomers?tenant=msweua3554t04815849&aid=FIN',
  auth: auth,
  method: 'POST',
  body: TextBody,
  headers: {
    'Content-Type':'text/xml;charset=utf-8',
    'Content-Length':TextBody.length,
    //'SOAPAction':"urn:microsoft-dynamics-schemas/codeunit/WhseAssemblyAssitant:GetLUISPredicition",
    'SOAPAction':""
  }
};
request.post(options,function(err, httpResponse, body) {
    if (err) {
      return console.error('post failed:', err);
    }
  
    console.log('Post successful!  Server responded with:', body);
  });
function CallSOAPBusinessCentral(URL,Method)
{
  var request = require("request");
auth = require('./ApiKey.json');
TextBody =
'<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">' +
'    <Body>' +
'        <GetLUISPredicition xmlns="urn:microsoft-dynamics-schemas/codeunit/WhseAssemblyAssitant">'+
'            <inputText>Open order 121</inputText>'+
'        </GetLUISPredicition>'+
'    </Body>'+
'</Envelope>';
var options = {
  url : 'https://api.businesscentral.dynamics.com/v2.0/d7cb5e81-c522-4647-8410-7aceac79e5a3/Sandbox/WS/CRONUS%20ES/Codeunit/WhseAssemblyAssitant?tenant=msweua3554t04815849&aid=FIN',
  auth: auth,
  method: 'POST',
  body: TextBody,
  headers: {
    'Content-Type':'text/xml;charset=utf-8',
    'Content-Length':TextBody.length,
    'SOAPAction':"urn:microsoft-dynamics-schemas/codeunit/WhseAssemblyAssitant:GetLUISPredicition",
  }

};
request.post(options,function(err, httpResponse, body) {
    if (err) {
      return console.error('post failed:', err);
    }
  
    console.log('Post successful!  Server responded with:', body);
  });
}