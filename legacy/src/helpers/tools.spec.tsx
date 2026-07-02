import { getBase64 } from "./tools";

test("convert img to base64", () => {
  expect(
    getBase64("https://assets2.lottiefiles.com/render/juyz44i5.gif")
  ).not.toBeUndefined();
});
