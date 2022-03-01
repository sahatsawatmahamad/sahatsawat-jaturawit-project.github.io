import cv2
import numpy as np
import HandTrackingModule as htm
import time
import autopy

###############
wScr, hScr = autopy.screen.size()
print(wScr,hScr)
wCam, hCam = 320, 240
frameR = 100 #frame Reduction

smooth = 20

smooth = 5
pTime = 0
plocX,plocY = 0,0
clocX,clocY = 0,0
###############

cap = cv2.VideoCapture(0)
cap.set(3, wCam)
cap.set(4, hCam)
pTime = 0
detector = htm.handDetector(maxHands=1)

while True:
    #1. หามือ
    success, img0 = cap.read()
    img = cv2.flip(img0,1)
    img = detector.findHands(img)
    lmList, bbox = detector.findPosition(img)
    #
    if len(lmList)!=0:
        x1, y1 = lmList[8][1:]
        x2, y2 = lmList[12][1:]
        a1, b1 = lmList[4][1:]
        a2, b2 = lmList[16][1:]
        a3, b3 = lmList[20][1:]
    #
        fingers = detector.fingersUp()
        print(fingers)
        cv2.circle(img, (320, 240), 5, (255, 0, 0), 10)
        cv2.rectangle(img, (frameR, frameR), (wCam - frameR, hCam - frameR), (255, 0, 255), 2)
    #
        if fingers[1] ==1 and fingers[2] == 1 and fingers[3] == 1 and fingers[4] == 1 and fingers[0] == 0:

            # x3 = np.interp(x1, (0,wCam),(0,wScr))
            # y3 = np.interp(y1, (0, hCam), (0, hScr))
    # สร้างframe

            # --------------------
            x3 = np.interp(x2, (frameR, wCam-frameR), (0, wScr))
            y3 = np.interp(y2, (frameR, hCam-frameR), (0, hScr))

            # print("นิวชี้")
            # clocX = plocX +(x3-plocX) / smooth
            # clocY = plocY + (x3 - plocY) / smooth
    #ขยับเมาส์

            cX = plocX + (x3 - plocX) * 0.999999999
            cY = plocY + (y3 - plocY) * 0.999999999

            autopy.mouse.move(cX, cY)
            # autopy.mouse.move(clocX,clocY)
            cv2.circle(img,(x2,y2),10,(0,255,0),cv2.FILLED)
            cv2.circle(img, (x1, y1), 10, (0, 255, 0), cv2.FILLED)
            cv2.circle(img, (a1, b1), 10, (0, 255, 0), cv2.FILLED)
            cv2.circle(img, (a2, b2), 10, (0, 255, 0), cv2.FILLED)
            cv2.circle(img, (a3, b3), 10, (0, 255, 0), cv2.FILLED)
            plocX,plocY = clocX,clocY

            #--------------------------------

        if fingers[1] == 1 and fingers[2] == 1 and fingers[3] == 1 and fingers[4] == 1 and fingers[0] == 1:
            # --------------------
            x3 = np.interp(x2, (frameR, wCam - frameR), (0, wScr))
            y3 = np.interp(y2, (frameR, hCam - frameR), (0, hScr))

            cX = plocX + (x3 - plocX) * 0.999999999
            cY = plocY + (y3 - plocY) * 0.999999999

            autopy.mouse.move(cX, cY)

            cv2.circle(img, (x2, y2), 10, (0, 255, 0), cv2.FILLED)
            cv2.circle(img, (x1, y1), 10, (0, 255, 0), cv2.FILLED)
            cv2.circle(img, (a1, b1), 10, (0, 255, 0), cv2.FILLED)
            cv2.circle(img, (a2, b2), 10, (0, 255, 0), cv2.FILLED)
            cv2.circle(img, (a3, b3), 10, (0, 255, 0), cv2.FILLED)
            plocX, plocY = clocX, clocY
    # Click
        if fingers[1] == 0 and fingers[2] == 0 and fingers[3] == 0 and fingers[4] == 0 and fingers[0] == 1:
            autopy.mouse.click()

    #Click
        elif fingers[1] == 0 and fingers[2] == 0 and fingers[3] == 0 and fingers[4] == 0 and fingers[0] == 0:
            autopy.mouse.click()


        elif fingers[0] ==1 and fingers[1] ==0:
            autopy.mouse.click()
            print("ท่าที่1")


        elif fingers[0] ==1 and fingers[2] ==0:
            autopy.mouse.click()
            print("ท่าที่2")


        elif fingers[0] ==1 and fingers[3] ==0:
            autopy.mouse.click()
            print("ท่าที่3")


        elif fingers[0] ==1 and fingers[4] ==0:
            autopy.mouse.click()
            print("ท่าที่4")


    #--------------- เพิ่มลูกเล่น

        #
        # if fingers[2] ==1:
        #     print("นิ้วกลาง")
        #
        # if fingers[3] ==1:
        #     print("นิ้วนาง")
        #
        # if fingers[4] ==1:
        #     print("นิ้วก้อย")
    #---------------


    #---------------------
    #frame rate
    cTime = time.time()
    fps = 1/(cTime-pTime)
    pTime = cTime
    cv2.putText(img,str(int(fps)),(20,50),cv2.FONT_HERSHEY_PLAIN,3,(255,0,0),3)
    #
    cv2.imshow("Image", img)
    cv2.waitKey(1)

