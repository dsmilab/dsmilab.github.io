1. Title	Wisconsin Prognostic Breast Cancer (WPBC)

2. Sources	http://www1.ics.uci.edu/~mlearn/MLSummary.html [breast-cancer-wisconsin]

3. Number of Instances: 198

4. Number of Attributes: 33

5. Attribute Information:

   Variable	Size
   ---------------------
   WPBC		198x33
   Class	198x1


   WPBC:
   
   1.ID number
   2.Time (recurrence time if Class = 1[recur],
	   disease-free time if Class = 0[norecur])
   3-32.Ten real-valued features are computed for each cell nucleus:

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
	resulting in 30 features.  For instance, field 4 is Mean Radius, field
	14 is Radius SE, field 24 is Worst Radius.

	Values for features 3-32 are recoded with four significant digits.

   33.Tumor size - diameter of the excised tumor in centimeters
   34.Lymph node status - number of positive axillary lymph nodes
      observed at time of surgery
   
   Class:
   
   1.Class code (1 = recur, 0 = nonrecur)

8. Missing attribute values:
	Lymph node status is missing in 4 cases.

9. Class distribution: 

   Class code	  Class		Number of instances
   ----------------------------------------------------
     0		nonrecur	151
     1		recur		 47
