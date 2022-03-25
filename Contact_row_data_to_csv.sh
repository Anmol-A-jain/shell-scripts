#taking file input arguments
input=$1

#filter indian number
awk '/\+91 */{print}' $input > step_2.txt

# removing saved number.
awk '!/Unknown/{print}' step_2.txt > step_3.txt

# remove spaces
cat step_3.txt | sed -r 's/\s+//g' > step_4.txt

# replacing +91 with +91[space]
cat step_4.txt | sed -r 's/\+91/\+91 /g' > step_5.txt

# replacing +91 with +91_
cat step_5.txt | sed -r 's/\Unknown_+91/\Unknown_+91_/g' > step_6.txt

# formating for csv format
awk '{print "Unknown_"$1" "$2",,,"$1" "$2}' step_6.txt > step_7.txt

# removing duplicate lines
awk '!seen[$0]++' step_7.txt > step_8.txt

# adding header for csv
sed '1 i Name,Given Name,Phone 1 - Type,Phone 1 - Value' step_8.txt > Final.csv
