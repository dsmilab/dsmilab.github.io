1. Title	Wisconsin Diagnostic Breast Cancer (WDBC)

2. Sources	http://www1.ics.uci.edu/~mlearn/MLSummary.html [breast-cancer-wisconsin]

3. Number of Instances: 569

4. Number of Attributes: 31

5. Attribute Information:

   Variable	Size
   ---------------------
   WDBC		569x31
   Class	569x1


   WDBC:
   
   1.ID number
   2-31.
   	a) radius (mean of distances from center to points on the perimeter)
	b) texture (standard deviation of gray-scale values)
	c) perimeter
	d) area
	e) smoothness (local variation in radius lengths)
	f) compactness (perimeter^2 / area - 1.0)
	g) concavity (severity of concave portions of the contour)
	h) concave points (number of concave portions of the contour)
	i) symmetry 
	j) fractal dimension ("coastline approximation" - 1)

	The mean, standard error, and "worst" or largest (mean of the three
	largest values) of these features were computed for each image,
	resulting in 30 features.  For instance, field 3 is Mean Radius, field
	13 is Radius SE, field 23 is Worst Radius.

	All feature values are recoded with four significant digits.


   
   Class:
   
   1.Class code (1 = malignant, 0 = benign)

8. Missing attribute values: none

9. Class distribution: 

   Class code	  Class		Number of instances
   ----------------------------------------------------
     0		Benign		357
     1		Malignant	212
