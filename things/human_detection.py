import cv2

def detect_humans(frame, hog):
    """ Detect humans in a frame using HOG descriptor. """
    # Run the detection
    rects, weights = hog.detectMultiScale(frame, winStride=(10, 10), padding=(32, 32), scale=1.05)
    
    # Draw rectangles around detected humans
    for (x, y, w, h) in rects:
        cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)
    
    return frame

def main():
    # Initialize webcam
    cap = cv2.VideoCapture(0)
    if not cap.isOpened():
        print("Error: Could not open webcam")
        return
    
    # Initialize HOG descriptor/person detector
    hog = cv2.HOGDescriptor()
    hog.setSVMDetector(cv2.HOGDescriptor_getDefaultPeopleDetector())
    
    while True:
        ret, frame = cap.read()
        frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        frame = cv2.GaussianBlur(frame, (5, 5), 0)

        if not ret:
            print("Error: Can't receive frame (stream end?). Exiting ...")
            break
        
        # Detect humans in the frame
        frame = detect_humans(frame, hog)
        
        # Display the resulting frame
        cv2.imshow('Human Detection', frame)
        
        # Press 'q' to exit the loop
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    # When everything done, release the capture and close windows
    cap.release()
    cv2.destroyAllWindows()

if __name__ == '__main__':
    main()
