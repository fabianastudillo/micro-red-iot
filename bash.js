let bashScript = `
echo '' > listUSB.txt \n
echo '' > devices.js \n
ls /dev/ttyUSB* > listUSB.txt \n
echo "let devices = [" >> devices.js \n
for line in $(cat listUSB.txt) \n
do echo "\'$line\' ," >> devices.js; \n
done \n
echo "];" >> devices.js; \n
echo "module.exports = devices;" >> devices.js; \n
`
module.exports = bashScript