activeWindowId=$(xdotool getactivewindow)
kill `xdotool getwindowpid $activeWindowId`
