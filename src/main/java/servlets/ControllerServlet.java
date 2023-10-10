package servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "ControllerServlet", value = "/process")
public class ControllerServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        if (request.getParameter("clear") != null && request.getParameter("clear").equals("true")) {
            request.getRequestDispatcher("/clear").forward(request, response);
        } else if (request.getParameter("x") != null && request.getParameter("y") != null && request.getParameter("r") != null) {
            // validate parameters
            request.getRequestDispatcher("/checkArea").forward(request, response);
        } else {
            // error message
            request.setAttribute("message", "Ошибка: переданы не все параметры!");
            request.getRequestDispatcher("index.jsp").forward(request, response);
        }
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.getRequestDispatcher("index.jsp").forward(req, resp);
    }
}

