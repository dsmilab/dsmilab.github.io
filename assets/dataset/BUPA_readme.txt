1. Title	BUPA liver disorders

2. Sources	http://www1.ics.uci.edu/~mlearn/MLSummary.html [liver-disorders]

3. Number of Instances: 345

4. Number of Attributes: 6

5. Relevant information:
   -- The first 5 variables are all blood tests which are thought
      to be sensitive to liver disorders that might arise from
      excessive alcohol consumption.  Each line in the bupa.data file
      constitutes the record of a single male individual.
   -- It appears that drinks>5 is some sort of a selector on this database.
      See the PC/BEAGLE User's Guide for more information.

6. Attribute Information:

   Variable		Size
   ---------------------------
   BUPA			345x6
   Class		345x1


   BUPA:
   
   1. mcv	mean corpuscular volume
   2. alkphos	alkaline phosphotase
   3. sgpt	alamine aminotransferase
   4. sgot 	aspartate aminotransferase
   5. gammagt	gamma-glutamyl transpeptidase
   6. drinks	number of half-pint equivalents of alcoholic beverages
                drunk per day

   Class:
   
   1. selector  field used to split data into two sets

8. Missing attribute values: None
