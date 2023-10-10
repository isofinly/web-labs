<%@ page contentType="text/html;charset=UTF-8" %>

<%@ page import="java.util.Calendar" %>
<%@ page import="data.Result" %>
<%@ page import="data.ResultList" %>


<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<%--    <link rel="stylesheet" href="css/style.css">--%>
    <link rel="stylesheet/less" type="text/css" href="css/style.less"/>
    <script src="https://cdn.jsdelivr.net/npm/less"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <link rel="icon" href="images/two.png">
    <title>Lab2 >_<</title>
</head>

<body>
    <div class="wrapper">
        <header class="header">
            <div class="container">
                <div class="header__row">
                    <div class="header__title">
                        <a href="https://www.ya.ru"
                        >Sokolov A. V. | 368823 | P3212</a
                        >
                        <br />
                        <a href="https://www.se.ifmo.ru">Var. 2239</a> <br />
                    </div>
                    <button class="footer__title" id="start-anim">
                        ARTILLERY STRIKE
                    </button>
                    <nav class="header__menu menu">
                        <div class="menu__icon">
                            <span></span>
                        </div>
                        <div class="menu__body">
                            <ul class="menu__list">
                                <li class="menu__item"><a href="">Lab1</a></li>
                                <li class="menu__item"><a href="">Lab2</a></li>
                                <li class="menu__item"><a href="">Lab3</a></li>
                                <li class="menu__item"><a href="">Lab4</a></li>
                                <li class="menu__item__special">
                                    <a href="https://github.com/isofinly/"
                                    >OnlyLabs Full Access</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>

        <main class="main">
            <div class="container">
                <h1 class="main__title">Лабораторная работа #2, вариант 2239 <span class="main__title-message"><%=
                (request.getAttribute("message") != null) ? "-> " + request.getAttribute("message") : ""%></span></h1>

                <div class="main__row">
                    <div class="main__left-block">
<%--                        <canvas id="graph"></canvas>--%>
    <div class="plot">
        <svg height="300" width="300">
            <polygon class="plot_part" points="250,150 150,150 150,50"></polygon>
            <rect class="plot_part" x="50" y="50" height="100" width="100"></rect>
            <path class="plot_part" d="M 50 150 A 100 100, 90, 0, 0, 150 250 L 150 150 Z"></path>

            <svg id="dots" height="300" width="300"></svg>

            <line stroke="black" x1="0" x2="300" y1="150" y2="150"></line>
            <line stroke="black" x1="150" x2="150" y1="0" y2="300"></line>

            <polygon fill="black" points="150,0 144,15 155,15"></polygon>
            <polygon fill="black" points="300,150 285,156 285,144"></polygon>

            <line stroke="black" x1="200" x2="200" y1="155" y2="145"></line>
            <line stroke="black" x1="250" x2="250" y1="155" y2="145"></line>

            <line stroke="black" x1="50" x2="50" y1="155" y2="145"></line>
            <line stroke="black" x1="100" x2="100" y1="155" y2="145"></line>

            <line stroke="black" x1="145" x2="155" y1="100" y2="100"></line>
            <line stroke="black" x1="145" x2="155" y1="50" y2="50"></line>

            <line stroke="black" x1="145" x2="155" y1="200" y2="200"></line>
            <line stroke="black" x1="145" x2="155" y1="250" y2="250"></line>

            <text fill="black" x="190" y="140">½R</text>
            <text fill="black" x="245" y="140">R</text>

            <text fill="black" x="40" y="140">-R</text>
            <text fill="black" x="85" y="140">-½R</text>

            <text fill="black" x="160" y="105">½R</text>
            <text fill="black" x="160" y="55">R</text>

            <text fill="black" x="160" y="205">-½R</text>
            <text fill="black" x="160" y="255">-R</text>

            <text fill="black" x="160" y="10">Y</text>
            <text fill="black" x="290" y="140">X</text>

            <circle fill="black" cx="150" cy="150" r="2"></circle>
            <svg id="dots" height="300" width="300"></svg>
        </svg>
    </div>

    <form id="main_form">
        <div class="input">
            <label class="form__label">Выберите X</label>
            <br>
            <input id="first_value_X" class="value_X" name="value_X" type="radio">
            <label class="radio-label" for="first_value_X">-2</label>
            <input id="second_value_X" class="value_X" name="value_X" type="radio">
            <label class="radio-label" for="second_value_X">-1.5</label>
            <input id="third_value_X" class="value_X" name="value_X" type="radio">
            <label class="radio-label" for="third_value_X">-1</label>
            <input id="fourth_value_X" class="value_X" name="value_X" type="radio">
            <label class="radio-label" for="fourth_value_X">-0.5</label>
            <input id="fifth_value_X" class="value_X" name="value_X" type="radio">
            <label class="radio-label" for="fifth_value_X">0</label>
            <input id="sixth_value_X" class="value_X" name="value_X" type="radio">
            <label class="radio-label" for="sixth_value_X">0.5</label>
            <input id="seventh_value_X" class="value_X" name="value_X" type="radio">
            <label class="radio-label" for="seventh_value_X">1</label>
            <input id="eighth_value_X" class="value_X" name="value_X" type="radio">
            <label class="radio-label" for="eighth_value_X">1.5</label>
            <input id="ninth_value_X" class="value_X" name="value_X" type="radio">
            <label class="radio-label" for="ninth_value_X">2</label>
            <br>
        </div>

        <div class="input">
            <label for="value_Y" class="form__label">Введите значение Y</label>
            <br>
            <input id="value_Y" type="text" maxlength="3"
                   placeholder="Введите число в диапазоне -3..5 " size="30">
            <br>
        </div>
        <div class="input">
            <label class="form__label">R</label>
            <div class="form__row">
                <input id="R" type="hidden" name="r" value="">
                <button class="form__r_btn" name="r" type="button" value="1">1</button>
                <button class="form__r_btn" name="r" type="button" value="1.5">1.5</button>
                <button class="form__r_btn" name="r" type="button" value="2">2</button>
                <button class="form__r_btn" name="r" type="button" value="2.5">2.5</button>
                <button class="form__r_btn" name="r" type="button" value="3">3</button>
            </div>
        </div>
        <div class="form-buttons">
            <input id="clear_button" type="reset" value="Очистить">
            <input id="submit_button" type="button" value="Отправить">
            <%--<br>
            <input id="reset_table_button" type="button" value="Очистить таблицу">--%>
        </div>
    </form>

                    </div>

                    <div class="main__table-block">
                        <table class="main__table">
                            <thead>
                            <tr>
                                <th>X</th>
                                <th>Y</th>
                                <th>R</th>
                                <th>Запуск</th>
                                <th>Работа</th>
                                <th>Результат</th>
                            </tr>
                            </thead>
                            <tbody id="output">
                            <%
                                ResultList resultList;
                                if (session.getAttribute("results") == null) {
                                    resultList = new ResultList();
                                } else {
                                    resultList = (ResultList) session.getAttribute("results");
                                }

                                for (Result result : resultList) {
                            %>
                            <tr id="server_values">
                                <td><%=result.getX()%></td>
                                <td><%=result.getY()%></td>
                                <td><%=result.getR()%></td>
                                <td><%=result.getCurrTime()%></td>
                                <td><%=result.getExecTime()%> нс</td>
                                <td><%=result.isHitResult() ? "<span class='hit'>Попадание</span>" : "<span class='miss'>Промах</span>"%></td>
                            </tr>
                            <% } %>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>


    <footer class="footer">
        <div class="container">
            <div class="footer__text">
                <a class="footer__title" href="#"> &copy 988 / Русь Святая </a>
            </div>
        </div>
    </footer>
    </div>

    <script type="text/javascript" src="js/script.js"></script>
    <script src="js/main.js"></script>
    <script src="js/plot.js"></script>
    <script src="js/requester.js"></script>
    <script src="js/validator.js"></script>
    <script src="js/plot.js"></script>
</body>

</html>