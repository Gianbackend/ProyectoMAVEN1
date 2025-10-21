package org.servlet;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;
import java.io.IOException;

@WebServlet("/game")
public class GameServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {

        req.getRequestDispatcher("/scenes/start.jsp").forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {

        String choice = req.getParameter("choice");
        String nextPage;

        if ("use".equals(choice)) {
            nextPage = "/scenes/use.jsp";
        } else if ("destroy".equals(choice)) {
            nextPage = "/scenes/destroy.jsp";
        } else if ("hide".equals(choice)) {
            nextPage = "/scenes/hide.jsp";
        } else if ("show".equals(choice)) {
            nextPage = "/scenes/show.jsp";
        } else if ("confront".equals(choice)) {
            nextPage = "/scenes/confront.jsp";
        } else if ("deny".equals(choice)) {
            nextPage = "/scenes/deny.jsp";
        } else if ("erase".equals(choice)) {
            nextPage = "/scenes/erase.jsp";
        } else if ("surrender".equals(choice)) {
            nextPage = "/scenes/surrender.jsp";
        } else if ("manipulate".equals(choice)) {
            nextPage = "/scenes/manipulate.jsp";
        } else if ("accept".equals(choice)) {
            nextPage = "/scenes/accept.jsp";
        } else if ("negotiate".equals(choice)) {
            nextPage = "/scenes/negotiate.jsp";
        } else if ("reject".equals(choice)) {
            nextPage = "/scenes/reject.jsp";
        } else {
            nextPage = "/scenes/error.jsp";
        }

        req.getRequestDispatcher(nextPage).forward(req, resp);
    }
}
