PSId=`ps -A | grep 'spotify' | wc -l`

if [ $PSId -eq 0 ]
then
	spotify
else
	wmctrl -ia `xdotool search --name spotify | tail -1`
fi
