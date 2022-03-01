import cv2
from flask import Flask, render_template, render_template_string, Response
import HandTrackingModule as htm
import autopy
import numpy as np

app = Flask(__name__)
video_capture = cv2.VideoCapture(0)

def gen():
    detector = htm.handDetector(maxHands=1)
    wCam, hCam = 320, 240
    frameR = 50
    plocX, plocY = 0, 0
    clocX, clocY = 0, 0

    video_capture.set(3,wCam)
    video_capture.set(4, hCam)




    wScr, hScr = autopy.screen.size()
    while True:
        ret, img0 = video_capture.read()
        img = cv2.flip(img0,1)
        img = detector.findHands(img)
        lmList, bbox = detector.findPosition(img)
        if len(lmList) != 0:
            x1, y1 = lmList[8][1:]
            x2, y2 = lmList[12][1:]
            a1, b1 = lmList[4][1:]
            a2, b2 = lmList[16][1:]
            a3, b3 = lmList[20][1:]
            landmark9_1, landmark9_2 = lmList[9][1:]

            #
            fingers = detector.fingersUp()

            cv2.circle(img, (160, 120), 3, (255, 0, 0), 10)
            cv2.rectangle(img, (frameR, frameR), (wCam - frameR, hCam - frameR), (255, 0, 255), 2)
            if fingers[1] == 1 and fingers[2] == 1 and fingers[3] == 1 and fingers[4] == 1 and fingers[0] == 0:

                # ปลายนิ้วกลาง
                # x3 = np.interp(x2, (frameR, wCam - frameR), (0, wScr))
                # y3 = np.interp(y2, (frameR, hCam - frameR), (0, hScr))

                # แลนมาคที่9
                lanmark9x = np.interp(landmark9_1, (frameR, wCam - frameR), (0, wScr))
                lanmark9y = np.interp(landmark9_2, (frameR, hCam - frameR), (0, hScr))


                # print("นิวชี้")
                # clocX = plocX +(x3-plocX) / smooth
                # clocY = plocY + (x3 - plocY) / smooth
                # ขยับเมาส์

                cX = plocX + (lanmark9x - plocX) * 0.999999999
                cY = plocY + (lanmark9y - plocY) * 0.999999999

                autopy.mouse.move(cX, cY)
                # autopy.mouse.move(clocX,clocY)
                cv2.circle(img, (landmark9_1, landmark9_2), 5, (0, 255, 0), cv2.FILLED)
                # cv2.circle(img, (x1, y1), 10, (0, 255, 0), cv2.FILLED)
                # cv2.circle(img, (a1, b1), 10, (0, 255, 0), cv2.FILLED)
                # cv2.circle(img, (a2, b2), 10, (0, 255, 0), cv2.FILLED)
                # cv2.circle(img, (a3, b3), 10, (0, 255, 0), cv2.FILLED)
                plocX, plocY = clocX, clocY
            if fingers[1] == 1 and fingers[2] == 1 and fingers[3] == 1 and fingers[4] == 1 and fingers[0] == 1:
                #ปลายนิ้วกลาง
                # x3 = np.interp(x2, (frameR, wCam - frameR), (0, wScr))
                # y3 = np.interp(y2, (frameR, hCam - frameR), (0, hScr))

                # แลนมาคที่9
                lanmark9x = np.interp(landmark9_1, (frameR, wCam - frameR), (0, wScr))
                lanmark9y = np.interp(landmark9_2, (frameR, hCam - frameR), (0, hScr))


                # print("นิวชี้")
                # clocX = plocX +(x3-plocX) / smooth
                # clocY = plocY + (x3 - plocY) / smooth
                # ขยับเมาส์
#-------------------------------------------------
                cX = plocX + (lanmark9x - plocX) * 0.999999999
                cY = plocY + (lanmark9y - plocY) * 0.999999999

                autopy.mouse.move(cX, cY)
                # autopy.mouse.move(clocX,clocY)
                cv2.circle(img, (x2, y2), 10, (0, 255, 0), cv2.FILLED)
                cv2.circle(img, (x1, y1), 10, (0, 255, 0), cv2.FILLED)
                cv2.circle(img, (a1, b1), 10, (0, 255, 0), cv2.FILLED)
                cv2.circle(img, (a2, b2), 10, (0, 255, 0), cv2.FILLED)
                cv2.circle(img, (a3, b3), 10, (0, 255, 0), cv2.FILLED)
                plocX, plocY = clocX, clocY

            # Click
            if fingers[1] == 0 and fingers[2] == 0 and fingers[3] == 0 and fingers[4] == 0 and fingers[0] == 1:
                autopy.mouse.click()

            # Click
            elif fingers[1] == 0 and fingers[2] == 0 and fingers[3] == 0 and fingers[4] == 0 and fingers[0] == 0:
                autopy.mouse.click()


            elif fingers[0] == 1 and fingers[1] == 0:
                autopy.mouse.click()
                print("ท่าที่1")


            elif fingers[0] == 1 and fingers[2] == 0:
                autopy.mouse.click()
                print("ท่าที่2")


            elif fingers[0] == 1 and fingers[3] == 0:
                autopy.mouse.click()
                print("ท่าที่3")


            elif fingers[0] == 1 and fingers[4] == 0:
                autopy.mouse.click()
                print("ท่าที่4")

        cv2.imwrite('t.jpg', img)
        yield (b'--frame\r\n'
           b'Content-Type: image/jpeg\r\n\r\n' + open('t.jpg', 'rb').read() + b'\r\n')
    video_capture.release()

@app.route('/')
def index():
    """Video streaming"""
    # return render_template('index.html')
    return render_template_string('''<html>
<head>
    <title>Video Test</title>
</head>
<body>
    <div>
        <h1 style="text-align:center">Image</h1>
        <img style="text-align:center" id="img" src="{{ url_for('video_feed') }}">
    </div>

</body>
</html>''')

@app.route('/video_feed')
def video_feed():
    """Video streaming route. Put this in the src attribute of an img tag."""
    return Response(gen(),
                mimetype='multipart/x-mixed-replace; boundary=frame')


if __name__ == '__main__':
    app.run()