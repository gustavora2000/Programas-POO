<!DOCTYPE html><html>

<body>
<p>Before canvas.</p>
<canvas width ="120" height="60"></canvas>
<p>After canvas.</p>
</body>

<script>
let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
context.fillStyle = "red";
context.fillRect(10, 10, 100, 50);
</script>

</html>
