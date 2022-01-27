<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$second_name = $_POST['user_secname'];
$surname = $_POST['user_surname'];
$citizen = $_POST['user_citizenship'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$passport = $_POST['user_passport'];
$question = $_POST['user_question'];
$time = $_POST['user_time'];
$file = "text.txt";
$value = file_get_contents($file);

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP mail.belmedtour.pl
$mail->Host = 'mail.hosting.reg.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'admin@belmedtour.pl'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'iv!i85Os'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров 

$mail->setFrom('admin@belmedtour.pl'); 
// от кого будет уходить письмо?
//

if ($value == 0){
    file_put_contents($file, 1);
    $mail->addAddress('doctorsprait@gmail.com');
}
if ($value == 1){
    file_put_contents($file, 0);
    $mail->addAddress('bmtour@gmail.com');
} 
// Кому будет уходить письмо  
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name


$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'ЗАЯВКА НА ЗВОНОК';
$mail->Body    = '' .$name . ' оставил заявку'
 .'<br>Второе имя пользователя: ' .$second_name
 .'<br>Фамилия пользователя: ' .$surname
 .'<br>удобное время ' .$time
 .'<br>его телефон ' .$phone
 .'<br>его вопрос ' .$question
 .'<br>Почта этого пользователя: ' .$email
 .'<br>Гражданство ' .$citizen
 .'<br>Паспортные данные этого пользователя: ' .$passport ;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
   '/index.html';
}