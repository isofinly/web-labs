<?php

$x = isset($_GET['x']) ? intval($_GET['x']) : null;
$y = isset($_GET['y']) ? intval($_GET['y']) : null;
$r = isset($_GET['r']) ? intval($_GET['r']) : null;

session_start();

date_default_timezone_set('Europe/Moscow');
$current_time = date("H:i:s");

if (!validate_values($x, $y, $r)) {
    http_response_code(412);
    echo("x={$x}, y={$y}, r={$r}");
    return;
}

$result = check_area($x, $y, $r) ? "<span class='hit'>Попадание</span>" : "<span class='miss'>Промах</span>";

$exec_time = round(microtime(true) - $_SERVER['REQUEST_TIME_FLOAT'], 5) . ' мс';

$_SESSION['tdata'][] = [$x, $y, $r, $current_time, $exec_time, $result];

$cookie_name = "sh0o0ting";
$cookie_value = json_encode($_SESSION['tdata']);
$cookie_duration = 30 * 24 * 60 * 60; // 30 days in seconds

setcookie($cookie_name, $cookie_value, time() + $cookie_duration, "/");
    

function check_area($x, $y, $r)
{
    return 
        ($x <= 0 and $y >= 0 and $y * 2 <= $x + $r) // triangle
            or
        ($x >= 0 and $x <= $r and $y <= 0 and $y >= -$r) // square
            or
        ($x >= 0 and $y >= 0 and (pow($x,2) + pow($y,2) <= pow($r, 2))); // circle
}

function validate_values($x, $y, $r)
{
    return in_array($x, [-5, -4, -3, -2, -1, 0, 1, 2, 3])
        and (is_numeric($y) and $y >= -3 and $y <= 5)
        and in_array($r, [1, 2, 3, 4, 5]);
}

foreach ($_SESSION["tdata"] as $rdata) {
    echo <<<HTML
    <tr>
        <td>$rdata[0]</td>
        <td>$rdata[1]</td>
        <td>$rdata[2]</td>
        <td>$rdata[3]</td>
        <td>$rdata[4]</td>
        <td>$rdata[5]</td>
    </tr>
HTML;
} ?>