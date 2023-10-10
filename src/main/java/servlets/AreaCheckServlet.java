package servlets;

import data.Result;
import data.ResultList;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import java.io.IOException;
import java.time.OffsetDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.List;

@WebServlet(name = "AreaCheckServlet", value = "/checkArea")
public class AreaCheckServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            long startTime = System.nanoTime(); // start time of request

            HttpSession session = request.getSession();

            ResultList resultList;
            if (session.getAttribute("results") == null) {
                resultList = new ResultList();
            } else {
                resultList = (ResultList) session.getAttribute("results");
            }

            if (validateAll(request.getParameter("x"), request.getParameter("y"), request.getParameter("r"))) {
                Result newResult = getNewResult(request.getParameter("x"), request.getParameter("y"), request.getParameter("r"), startTime);
                resultList.addNewResult(newResult);
            } else {
                request.setAttribute("message", "Ошибка: неверные значения параметров.");
            }

            session.setAttribute("results", resultList);
            response.sendRedirect("index.jsp");
        } catch (IllegalArgumentException | NullPointerException e) {
            response.setStatus(400);
        } finally {
            request.getRequestDispatcher("index.jsp").forward(request, response);
        }
    }

//    @Override
//    protected void doGet(HttpServletRequest req, HttpServletResponse res)
//            throws ServletException, IOException {
//        req.getRequestDispatcher("index.jsp").forward(req, res);
//    }

    private Result getNewResult(String x, String y, String r, long startTime) throws IllegalArgumentException {
        double xVal = Double.parseDouble(x);
        double yVal = Double.parseDouble(y);
        double rVal = Double.parseDouble(r);

        OffsetDateTime currentTimeObject = OffsetDateTime.now();
        String currTime = currentTimeObject.format(DateTimeFormatter.ofPattern("HH:mm:ss"));
        String execTime = String.valueOf(System.nanoTime() - startTime);

        return new Result(xVal, yVal, rVal, currTime, execTime, checkHit(xVal, yVal, rVal));
    }

    private boolean validateX(String xString) {
        try {
            double xValue = Double.parseDouble(xString);
            return xValue >= -2 && xValue <= 2;
        } catch (NumberFormatException exception) {
            return false;
        }
    }

    private boolean validateY(String yString) {
        try {
            double yValue = Double.parseDouble(yString);
            return yValue >= -3 && yValue <= 5;
        } catch (NumberFormatException exception) {
            return false;
        }
    }

    private boolean validateR(String rString) {
        try {
            List<Double> rRange = Arrays.asList(1.0, 1.5, 2.0, 2.5, 3.0);
            double rValue = Double.parseDouble(rString);
            return rRange.contains(rValue);
        } catch (NumberFormatException exception) {
            return false;
        }
    }

    private boolean validateAll(String xString, String yString, String rString) {
        return validateX(xString) && validateY(yString) && validateR(rString);
    }

    private boolean checkHit(double x, double y, double r) {
        return  (x >= 0 && x <= r && y >= 0 && y <= r && x + y <= r)
                ||
                (x<=0 && y>=0 && x>=-(double)r && y<=r)
                ||
                (x >= -r && x <= 0 && y <= 0 && Math.pow(x, 2) + Math.pow(y, 2) <= Math.pow(r, 2))
                ;
    }
}