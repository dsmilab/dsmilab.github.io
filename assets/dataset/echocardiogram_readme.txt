1. Title	Echocardiogram Data

2. Sources	http://www1.ics.uci.edu/~mlearn/MLSummary.html [echocardiogram]

3. Number of Instances: 132

4. Number of Attributes: 9 (all numeric-valued)

5. Attribute Information:

   Variable		Size
   ---------------------------
   Echocardiogram	132x9
   Class		132x1


   Echocardiogram:
   
   1. survival -- the number of months patient survived (has survived,
		  if patient is still alive).  Because all the patients
		  had their heart attacks at different times, it is 
		  possible that some patients have survived less than
		  one year but they are still alive.  Check the second
		  variable to confirm this.  Such patients cannot be 
		  used for the prediction task mentioned above.
   2. still-alive -- a binary variable.  0=dead at end of survival period,
		     1 means still alive 
   3. age-at-heart-attack -- age in years when heart attack occurred
   4. pericardial-effusion -- binary. Pericardial effusion is fluid
			      around the heart.  0=no fluid, 1=fluid
   5. fractional-shortening -- a measure of contracility around the heart
			       lower numbers are increasingly abnormal
   6. epss -- E-point septal separation, another measure of contractility.  
	      Larger numbers are increasingly abnormal.
   7. lvdd -- left ventricular end-diastolic dimension.  This is
	      a measure of the size of the heart at end-diastole.
	      Large hearts tend to be sick hearts.
   8. wall-motion-score -- a measure of how the segments of the left
			   ventricle are moving
   9. wall-motion-index -- equals wall-motion-score divided by number of
			   segments seen.  Usually 12-13 segments are seen
			   in an echocardiogram.  Use this variable INSTEAD
			   of the wall motion score.


   Class:
   
   1. alive-at-1 -- Boolean-valued. Derived from the first two attributes.
                    0 means patient was either dead after 1 year or had
                    been followed for less than 1 year.  1 means patient 
                    was alive at 1 year.

8. Missing attribute values: (denoted by 'NaN')

   Echocardiogram:

   Attribute #:    Number of Missing Values: (total: 106)
   ------------    -------------------------
              1    2  
              2	   1  
              3	   5  
              4	   1  
              5	   8  
              6	   15 
              7	   11 
              8	   4  
              9	   1  

   Class:
   
   Attribute #:    Number of Missing Values:
   ------------    -------------------------
              1	   58


9. Class distribution: 

  Distribution of attribute number 2 [still-alive] of Echocardiogram
   Value   Number of instances with this value
    ----   -----------------------------------
      0    88 (dead)
      1    43 (alive)
     NaN    1
    Total  132


  Distribution of attribute [alive-at-1] of Class
   Value   Number of instances with this value
    ----   -----------------------------------
      0    50
      1    24
     NaN   58
    Total  132
