1. Title	Adult Database
		
2. Sources	http://www1.ics.uci.edu/~mlearn/MLSummary.html [Adult]

		This data was extracted from the census bureau database.
		Prediction task is to determine whether a person makes
		over 50K a year.

	      	Extraction was done by Barry Becker from the 1994 Census database.
	      	A set of reasonably clean records was extracted using the following
	      	conditions:
	      	
	      	
			((AAGE>16) && (AGI>100) && (AFNLWGT>1)&& (HRSWK>0))


3. Number of Instances: 48842

   48842 instances, mix of continuous and discrete    (train=32561, test=16281)
   45222 if instances with unknown values are removed (train=30162, test=15060)
   Split into train-test using MLC++ GenCVFiles (2/3, 1/3 random).

4. Number of Attributes: 14 (6 continuous, 8 nominal attributes)

5. Attribute Information:

   Variable	Size
   ---------------------
   Adult	48842x14 (train:1~32561 test:32562~48842)
   Class	48842x1


   Adult:
   
	1.age: continuous.
	2.workclass: nominal
		1 - Private
		2 - Self-emp-not-inc
		3 - Self-emp-inc
		4 - Federal-gov
		5 - Local-gov
		6 - State-gov
		7 - Without-pay
		8 - Never-worked
	3.fnlwgt: continuous.
	4.education: nominal
		1 - Bachelors
		2 - Some-college
		3 - 11th
		4 - HS-grad
		5 - Prof-school
		6 - Assoc-acdm
		7 - Assoc-voc
		8 - 9th
		9 - 7th-8th
		10 - 12th
		11 - Masters
		12 - 1st-4th
		13 - 10th
		14 - Doctorate
		15 - 5th-6th
		16 - Preschool
	5.education-num: continuous.
	6.marital-status: nominal
		1 - Married-civ-spouse
		2 - Divorced
		3 - Never-married
		4 - Separated
		5 - Widowed
		6 - Married-spouse-absent
		7 - Married-AF-spouse
	7.occupation: nominal
		1 - Tech-support
		2 - Craft-repair
		3 - Other-service
		4 - Sales
		5 - Exec-managerial
		6 - Prof-specialty
		7 - Handlers-cleaners
		8 - Machine-op-inspct
		9 - Adm-clerical
		10 - Farming-fishing
		11 - Transport-moving
		12 - Priv-house-serv
		13 - Protective-serv
		14 - Armed-Forces
	8.relationship: nominal
		1 - Wife
		2 - Own-child
		3 - Husband
		4 - Not-in-family
		5 - Other-relative
		6 - Unmarried
	9.race: nominal
		1 - White
		2 - Asian-Pac-Islander
		3 - Amer-Indian-Eskimo
		4 - Other
		5 - Black
	10.sex: nominal
		1 -Female, 2 - Male.
	11.capital-gain: continuous.
	12.capital-loss: continuous.
	13.hours-per-week: continuous.
	14.native-country: nominal
		1 - United-States,	2 - Cambodia,	3 - England,
		4 - Puerto-Rico,	5 - Canada,	6 - Germany,
		7 - Outlying-US(Guam-USVI-etc),		8 - India,
		9 - Japan,		10 - Greece,	11 - South,
		12 - China,		13 - Cuba,	14 - Iran,
		15 - Honduras,		16 - Philippines,
		17 - Italy,		18 - Poland,	19 - Jamaica,
		20 - Vietnam,		21 - Mexico,	22 - Portugal,
		23 - Ireland,		24 - France,	25 - Dominican-Republic,
		26 - Laos,		27 - Ecuador,	28 - Taiwan,
		29 - Haiti,		30 - Columbia,	31 - Hungary,
		32 - Guatemala,		33 - Nicaragua, 34 - Scotland,
		35 - Thailand,		36 - Yugoslavia,37 - El-Salvador,
		38 - Trinadad&Tobago,	39 - Peru,	40 - Hong,
		41 - Holand-Netherlands.


   Class:
   
	1.class: 0 - <=50K, 1 - >50K

8. Missing attribute values: 7% have missing values. (denoted by 'NaN')

9. Class distribution: 

 Probability for the label '>50K'  : 23.93% / 24.78% (without unknowns)
 Probability for the label '<=50K' : 76.07% / 75.22% (without unknowns)
