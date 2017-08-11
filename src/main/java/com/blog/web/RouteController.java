package com.blog.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by admin on 2017/8/10.
 */
@Controller
public class RouteController {
    @RequestMapping("/")
    public String index(){
        return "home";
    }
    @RequestMapping("/person")
    public String person(){
        return "person";
    }
}
