The Benchmark Data Sets
For each data set provides 12 splits (exception: only 10 splits for data set 8) into labeled points and remaining unlabeled points. Ensure that each split contains at least one point of each class. Apart from this, there is no bias in the labeling process. 
The table contains individual files in matlab 5.0 format (.mat files). 

Data Set		Points		Dimensions		Splits with l Labeled Points
------------------------------------------------------------------------------
g241c (set 5)	1500		241		l=10, l=100
g241n (set 7)	1500		241		l=10, l=100
Digit1 (set 1)	1500		241		l=10, l=100
USPS (set 2)	1500		241		l=10, l=100
COIL (set 6)	1500		241		l=10, l=100
COIL2 (set 3)	1500		241		l=10, l=100 (binary version of set 6) 
BCI (set 4)	400		117		l=10, l=100
Text (set 9)	1500		11960		l=10, l=100
SecStr (set 8)	83,679 +		315		l=100, l=1000, l=10000 
		1,189,472			(no splitting of extra unlabeled data); 
						matlab script required

You can also download all data sets and splits (excluding the extra unlabeled data of set 8) at once as archive files, in matlab format: gzipped TAR file, ZIP file; in ascii format: gzipped TAR file, ZIP file (here, only the indices of the labeled examples are provided -- all other examples are unlabeled). Data sets 8 and 9 are supplied in special formats: in set 8, all attributes are categorical and have to be expanded into a sparse binary vector (21 bits per attribute; cf to the matlab script); in set 9, the data are very sparse, and only non-zero values are supplied as a list of "index:value" pairs. 
X = matrix of input data; each row corresponds to one example
y = the labels (either {0,1} or {-1,+1} for binary problems)
idxLabs = each row contains the indices of the labeled points for a given split
idxUnls = idem for the unlabeled points
(all indices are 1-based as in matlab, not 0-based as in C)
