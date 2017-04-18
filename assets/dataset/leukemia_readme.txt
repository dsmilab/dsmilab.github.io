1. Title	leukemia

2. Sources	http://www-genome.wi.mit.edu/cgi-bin/cancer/publications/pub_paper.cgi?mode=view&paper_id=43
		[Molecular Classification of Cancer: Class Discovery and Class Prediction by Gene Expression]

3. Number of Instances: 72(合併了data_set_ALL_AML_train.txt, data_set_ALL_AML_independent.txt兩份data set中的資料)

4. Number of Attributes: 7129(x2 if include PA)

5. Relevant information:

These datasets contain measurements corresponding to ALL and AML
samples from Bone Marrow and Peripheral Blood. Details about the
experimental method and protocol can be found in 
Experimental_protocol.html. Intensity values have been re-scaled such
that overall intensities for each chip are equivalent. This is done by
fitting a linear regression model using the intensities of all genes
with "P" (present) calls in both the first sample (baseline) and each
of the other samples. The inverse of the "slope" of the linear
regression line becomes the (multiplicative) re-scaling factor for the
current sample. This is done for every chip (sample) in the dataset
except the baseline which gets a re-scaling factor of one. File
table_ALL_AML_rfactors.txt contains a table with the chip re-scaling
factors .

6. Attribute Information:

   Variable		Size
   ---------------------------
   Leukemia		72x7129
   P_A			72X7129
   Class		72x1
   Information		72x7



     
   Leukemia:(共有7129個不同的Gene Accession Number)
   
   	1~7129: 	linear
   
   
   P_A:(Affymetrix "Present" (P) and "Absent" (A) calls)
   
   	1~7129: 	1 - Present, 2 - Absent, 3 - M


   Class:
   
     1. Class:		1 - ALL, 2 - AML


   Information:
   (資料來自table_ALL_AML_samples.txt,這部份可能與"預測"較不相關,且missing value多)
   
     1. BM/PB			1 - BM, 2 - PB
     2. T/B-cell(if ALL)	1 - T-cell, 2 - B-cell
     3. FAB(if AML)		1 - M1, 2 - M2, 3 - M3, 4 - M4, 5 - M5
     4. Gender			1 - male, 2 - female
     5. % Blasts		linear
     6. Treatment Response	0 - Failure, 1 - Success
     7. Prediction Strength (PS)linear(0~1)


7. Missing attribute values: (denoted by 'NaN')

   Information:

   Attribute #:    Number of Missing Values:
   ------------    -------------------------
	 1:		 0
	 2:		25
	 3:		52
	 4:		23
	 5:		57
	 6:		57
	 7:		 0


8. Class distribution: 

   Value   Number of instances with this value
    ----   -----------------------------------
      1     47 (ALL)
      2     25 (AML)