1. Title	Postoperative Patient Data

2. Sources	http://www1.ics.uci.edu/~mlearn/MLSummary.html [postoperative-patient-data]

3. Number of Instances: 90

4. Number of Attributes: 8

5. Relevant Information:
      The classification task of this database is to determine where
      patients in a postoperative recovery area should be sent to next.  
      Because hypothermia is a significant concern after surgery
      (Woolery, L. et. al. 1991), the attributes correspond roughly to body 
      temperature measurements.

      Results:
      -- LERS (LEM2): 48% accuracy


6. Attribute Information:

   Variable		Size
   ---------------------------
   Postoperative	90x8
   Class		90x1


   Postoperative:

     1. L-CORE (patient's internal temperature in C):
              3 - high (> 37),
              2 - mid (>= 36 and <= 37),
              1 - low (< 36)
     2. L-SURF (patient's surface temperature in C):
              3 - high (> 36.5),
              2 - mid (>= 36.5 and <= 35),
              1 - low (< 35)
     3. L-O2 (oxygen saturation in %):
              4 - excellent (>= 98),
              3 - good (>= 90 and < 98),
              2 - fair (>= 80 and < 90),
              1 - poor (< 80)
     4. L-BP (last measurement of blood pressure):
              3 - high (> 130/90),
              2 - mid (<= 130/90 and >= 90/70),
              1 - low (< 90/70)
     5. SURF-STBL (stability of patient's surface temperature):
              3 - stable,
              2 - mod-stable,
              1 - unstable
     6. CORE-STBL (stability of patient's core temperature)
              3 - stable,
              2 - mod-stable,
              1 - unstable
     7. BP-STBL (stability of patient's blood pressure)
              3 - stable,
              2 - mod-stable,
              1 - unstable
     8. COMFORT (patient's perceived comfort at discharge, measured as
              an integer between 0 and 20)

  Class:
   
     1. decision ADM-DECS (discharge decision):
              0 - I (patient sent to Intensive Care Unit),
              1 - S (patient prepared to go home),
              2 - A (patient sent to general hospital floor)

7. Missing attribute values:
      Attribute 8 has 3 missing values

8. Class Distribution:

   Class Value  Number of instances
     0(I)		  2
     1(S)		 24
     2(A)		 64
