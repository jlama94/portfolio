package com.portfolio.demo;

import com.portfolio.demo.models.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.io.File;
import java.io.FileInputStream;


@CrossOrigin(value = "http://localhost:4200")   // to allow localhost:4200 to send requests.
@RestController
//@RequestMapping("api")  // /api/endpoint
@RequestMapping("portfolio")
public class PortfolioController {

    @Autowired
    private NotificationService notificationService;

    public PortfolioController(NotificationService notificationService) {
        this.notificationService = notificationService;
    }



  @CrossOrigin(value = "http://localhost:4200")
  @RequestMapping(value = "/download", method = RequestMethod.GET)
  public @ResponseBody ResponseEntity<InputStreamResource> downloadResume() throws Exception {
      try {
        // you get the file
        File pdfFile = new File("src/main/resources/downloads/Resume.pdf");
        // set the headers for the browser
        HttpHeaders httpHeaders = new HttpHeaders();
        // specify the media type
        MediaType mediaType = MediaType.parseMediaType("application/pdf");
        httpHeaders.setContentType(mediaType);
        httpHeaders.setContentLength(pdfFile.length());
        httpHeaders.setContentDispositionFormData("attachment", pdfFile.getName());

        InputStreamResource inputStreamResource = new InputStreamResource(new FileInputStream(pdfFile));
        return new ResponseEntity<InputStreamResource>(inputStreamResource, httpHeaders, HttpStatus.OK);
      } catch( Exception exception) {
        String errorMessage = "Could not download my Resume. Cause: " + exception.getCause() + " Message:"
          + exception.getMessage();
        return new ResponseEntity<InputStreamResource>(HttpStatus.INTERNAL_SERVER_ERROR);
      }
  }

    @RequestMapping(value = "/")
    public String index() {
        return "index";
    }


    @CrossOrigin(value = "http://localhost:4200")
    @RequestMapping(value = "/emailReceived", method = RequestMethod.POST,
    consumes = {"application/json"},
    produces = {"application/json"})
    public void emailSent (@RequestBody Message message) throws Exception {
        this.notificationService.apacheSendEmail(message);
    }

}
