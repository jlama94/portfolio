package com.portfolio.demo;

import com.portfolio.demo.models.Message;
import org.apache.commons.mail.DefaultAuthenticator;
import org.apache.commons.mail.HtmlEmail;
import org.springframework.stereotype.Component;


@Component
public class ApacheMailSender {


  public ApacheMailSender() {}

  public void prepareMessage(Message message) throws Exception {
    HtmlEmail htmlEmail = new HtmlEmail();
    htmlEmail.setHostName("smtp.gmail.com");
    htmlEmail.setSmtpPort(456);
    htmlEmail.setAuthenticator(new DefaultAuthenticator("lamajulio17@gmail.com", "xqdqxeapuqhgttwp"));
    htmlEmail.setSSLOnConnect(true);
    // Set the recipient and the sender.
    htmlEmail.addTo("lamajulio17@gmail.com");
    htmlEmail.setFrom(message.getFrom());
    htmlEmail.setSubject("Portfolio: Message Received");

    // Build the message based off of the Message on the front-end.
    StringBuffer htmlBuilder = new StringBuffer();
    htmlBuilder.append("<html>")
        .append("<body>")
        .append("<h1>").append("Portfolio Message").append("</h1>")
        .append("<strong>").append("From: ").append("</strong>").append(message.getFrom()).append("<br/>")
        .append("<strong>").append("Telephone: ").append("</strong>").append(message.getTelephone()).append("<br/>")
        .append("<strong>").append("Message: ").append("</strong>")
        .append("<div>")
        .append("<p>").append(message.getBody()).append("</p>")
        .append("</div>")
        .append("</body>")
        .append("</html>");
    htmlEmail.setHtmlMsg(htmlBuilder.toString());
    htmlEmail.send();
  }
}
