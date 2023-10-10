package servlets;

import data.ResultList;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet(name = "ClearTableServlet", value = "/clear")
public class ClearTableServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        HttpSession session = request.getSession();

        ResultList resultList;
        if (session.getAttribute("results") == null) {
            resultList = new ResultList();
        } else {
            resultList = (ResultList) session.getAttribute("results");
        }

        resultList.clear();
        session.setAttribute("results", resultList);

        request.getRequestDispatcher("index.jsp").forward(request, response);
    }

//    @Override
//    protected void doGet(HttpServletRequest req, HttpServletResponse res)
//            throws ServletException, IOException {
//        req.getRequestDispatcher("index.jsp").forward(req, res);
//    }
}
