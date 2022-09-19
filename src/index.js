import "./styles.css";

let detail = {
  length: 350,
  width: 250,
  lt: { radius: 0 },
  lb: { radius: 0 },
  rt: { radius: 50 },
  rb: { radius: 0 },
};

{
  const app = document.getElementById("app");
  const detailCanvas = document.getElementById("detail");
  const heightInput = document.getElementById("heightInput");
  const widthInput = document.getElementById("widthInput");
  const rightAngleInput = document.getElementById("rightAngleInput");
  const rotateZ = document.getElementById("rotateZ");
  const pi = Math.PI;

  //your code here....
  function drowDetail({ width, length, rt }, rotate) {
    if (detailCanvas.getContext) {
      let ctx = detailCanvas.getContext("2d");
      const start = {
        x: (detailCanvas.width - length) / 2,
        y: (detailCanvas.height - width) / 2,
      };
      ctx.clearRect(0, 0, detailCanvas.width, detailCanvas.height);
      ctx.beginPath();
      ctx.moveTo(start.x, start.y);
      ctx.lineTo(start.x + length - rt.radius, start.y);
      ctx.moveTo(start.x, start.y);
      ctx.lineTo(start.x, start.y + width);
      ctx.lineTo(start.x + length, start.y + width);
      ctx.lineTo(start.x + length, start.y + rt.radius);
      ctx.stroke();

      ctx.arc(
        start.x + length - rt.radius,
        start.y + rt.radius,
        rt.radius,
        0,
        -pi / 2,
        true
      );
      ctx.stroke();

      if (rotate) {
        ctx.translate(start.x + length / 2, start.y + width / 2);
        ctx.rotate(pi / 2);
        ctx.translate(-(start.x + length / 2), -(start.y + width / 2));
      }
    }
  }

  drowDetail(detail);

  heightInput.addEventListener("change", function (e) {
    let height = parseInt(e.target.value);
    if (!isNaN(height)) {
      detail.length = height;
      drowDetail(detail);
    }
  });
  widthInput.addEventListener("change", function (e) {
    let width = parseInt(e.target.value);
    if (!isNaN(width)) {
      detail.width = width;
      drowDetail(detail);
    }
  });
  rightAngleInput.addEventListener("change", function (e) {
    let radius = parseInt(e.target.value);
    if (!isNaN(radius)) {
      detail.rt.radius = radius;
      drowDetail(detail);
    }
  });
  rotateZ.addEventListener("click", function () {
    drowDetail(detail, true);
  });
}
