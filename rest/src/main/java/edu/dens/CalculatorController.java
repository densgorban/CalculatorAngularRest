package edu.dens;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE;
import static org.springframework.http.MediaType.APPLICATION_XML_VALUE;

@RestController
@RequestMapping("/calculator")
public class CalculatorController {

    @GetMapping(path = "/")
    public ResponseEntity<Float> findById(@RequestParam("x") float x, @RequestParam("y") float y, @RequestParam("opr") String operation) {
        if(operation.equals("SUM")) {
            return new ResponseEntity<>(x + y, HttpStatus.OK);
        } else if(operation.equals("SUB")) {
            return new ResponseEntity<>(x - y, HttpStatus.OK);
        }else if(operation.equals("MULT")) {
            return new ResponseEntity<>(x * y, HttpStatus.OK);
        }else if(operation.equals("DIV")) {
            return new ResponseEntity<>(x / y, HttpStatus.OK);
        }
        else return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}