if [ -z "$1" ]
then
    id="94798795"
else 
    id=$1
fi

echo "ID Number : " $id

array=`awk -v idno="$id" ' BEGIN { FS="," } { if ($3 == idno || $1 == idno ) { print $1 } }' data.csv `

echo $array | sort -u > op.txt
cp op.txt op.tmp

for i in {1..50}
do
    echo "Depth level : " $i 
    data=`awk ' BEGIN { FS="," } { print $1 }' op.txt`

    for a in $data
    do
        #echo "IDNO" $a
        awk -v idno="$a" 'BEGIN { FS="," } { if ($3 == idno || $1 == idno ) { print } }' data.csv >> op1.txt
        
        sort -u op1.txt > op2.txt
        rm op1.txt
        mv op2.txt op1.txt
    done 
    
    resutl_of_compare=`diff op1.txt op.tmp | wc -l`
    if [ $resutl_of_compare == "0" ]
    then
       break;
    fi
    
    cp op1.txt op.tmp
    cp op1.txt op.txt
done

rm op1.txt op.tmp

head -1 data.csv > final.csv
cat op.txt >> final.csv
rm op.txt

if [ -z "$1" ]
then
    mv final.csv output.csv
else 
    mv final.csv $2
fi

