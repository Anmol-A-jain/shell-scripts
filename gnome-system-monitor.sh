PSId=`ps -A | grep 'gnome-system-mo' | wc -l`

if [ $PSId -eq 1 ]
then
	kill `ps -A | grep 'gnome-system-mo' |awk '{print $1}'`
	exit
else
	/usr/bin/gnome-system-monitor
	exit
fi
