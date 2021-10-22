 <?php
 
require __DIR__.'/vendor/autoload.php';

use GuzzleHttp\Client;
use GuzzleHttp\Psr7\Request;
use GuzzleHttp\Psr7;
use GuzzleHttp\Exception\RequestException;
 $userEmail = ""; 
   
   $client=new Client();
   
   $headers = [ 'authorization' => 'Bearer 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',
        'content-type'     => 'application/json'];
   $body='';
   $bodyadmin='';
   $request='';
     $request1='';
   if(isset($_POST['subscribe'])){ 
         $subject = "ICONIC DREAM FOCUS PVT LTD - Thanks for subscribing us";
         $message = "Thank You for joining your hands with us. You'll always receive updates from us. And we won't share and sell your information.";
         $body='{
          "from":{
             "email":"idficonic@gmail.com",
             "name":"ICONIC DREAM FOCUS PVT LTD"
          },
          "personalizations":[
             {
                "to":[
                   {
                      "email":"'.$_POST['email'].'",
                      "name":"'.$_POST['name'].'"           
                            }
                ]}
          ],
          "template_id":"d-663d0303c1ce47f6b65e8cc576638028"
       }';
        // $body = '{"personalizations":[{"to":[{"email":"'.$_POST['email'].'","name":"'.$_POST['name'].'"}],"subject":"'.$subject.'"}],"content": [{"type": "text/plain", "value":"'.$message.'"}],"from":{"email":"idficonic@gmail.com","name":"Iconic Dream Focus"}}';
  $bodyadmin = '{"personalizations":[{"to":[{"email":"srseetharam1999@gmail.com","name":"ICONIC DREAM FOCUS"}],"subject":"subscriber list "}],"content": [{"type": "text/plain", "value":"mail:'.$_POST['email'].' \n name:'.$_POST['name'].' \n phone:'.$_POST['phone'].' \n message:'.$_POST['message'].'"}],"from":{"email":"idficonic@gmail.com","name":"Iconic Dream Focus"}}';
         
        $request = new Request('POST', 'https://api.sendgrid.com/v3/mail/send', $headers, $body);
       $request1 = new Request('POST', 'https://api.sendgrid.com/v3/mail/send', $headers, $bodyadmin);
              
                   
               try{
                $promise = $client->send($request);
            
                 $promise1 = $client->send($request1);
                }
                   catch (RequestException $e){
                echo $e;}
            }
            
                   ?>
