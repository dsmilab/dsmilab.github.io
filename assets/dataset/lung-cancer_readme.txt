1. Title	Lung Cancer Data

2. Sources	http://www1.ics.uci.edu/~mlearn/MLSummary.html [lung-cancer]

3. Number of Instances: 32

4. Number of Attributes: 56

5. Relevant information:
	- This data was used by Hong and Young to illustrate the 
	  power of the optimal discriminant plane even in ill-posed
	  settings. Applying the KNN method in the resulting plane	
	  gave 77% accuracy. However, these results are strongly
	  biased (See Aeberhard's second ref. above, or email to
	  stefan@coral.cs.jcu.edu.au). Results obtained by
	  Aeberhard et al. are : 
	  RDA : 62.5%, KNN 53.1%, Opt. Disc. Plane 59.4%

	  The data described 3 types of pathological lung cancers.
	  The Authors give no information on the individual
	  variables nor on where the data was originally used.

       -  In the original data 4 values for the fourth attribute were -1.
          These values have been changed to NaN (unknown). (*)
       -  In the original data 1 value for the 38 attribute was 4.  This
          value has been changed to NaN (unknown). (*)

6. Attribute Information:

   Variable		Size
   ---------------------------
   Lung_cancer		32x56
   Class		32x1


   Lung_cancer:

	- All predictive attributes are nominal, taking on integer 
	  values 0-3
   Class:
   
   1. selector  field used to split data into two sets

7. Missing attribute values: Attributes 4 and 38 (*)

8. Class Distribution:
	- 3 classes, 
		1.)	9 observations
		2.)	13     "
		3.)	10     "
