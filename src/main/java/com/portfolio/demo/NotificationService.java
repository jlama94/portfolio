package com.portfolio.demo;

import com.portfolio.demo.models.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/*
  Service that uses Apache Common email.
 */
@Service
public class NotificationService {

  @Autowired
  private ApacheMailSender apacheMailSender;  // dependency injected.

  public NotificationService(ApacheMailSender apacheMailSender) {
    this.apacheMailSender = apacheMailSender;
  }

  public void apacheSendEmail(Message message) throws Exception {
    this.apacheMailSender.prepareMessage(message);
  }

}
