#!/bin/bash
# Simple line count example, using bash
# Usage: ./line_count.sh file

# You define a variable as follows:
# X="hello"
# and refer to it as follows:
# $X
# More specifically, $X is used to denote the value of the variable X. 
# -----------------------------------------------------------------------------

# https://www.gnu.org/software/bash/manual/html_node/Special-Parameters.html - Check 

# Link filedescriptor 10 with stdin
# & followed by a digit in Linux indicates a file number. File number 0 is standard input (stdin). The < and > characters indicate redirection of the process's standard in and standard out respectively.
# Explaining File Descriptor - In simple words, when you open a file, the operating system creates an entry to represent that file and store the information about that opened file. So if there are 100 files opened in your OS then there will be 100 entries in OS (somewhere in kernel). These entries are represented by integers like (...100, 101, 102....). This entry number is the file descriptor. So it is just an integer number that uniquely represents an opened file in operating system. If your process opens 10 files then your Process table will have 10 entries for file descriptors.
# exec without a command is used to do redirection in the current process. That is, it changes the files attached to different file descriptors (FD). So the line "exec 10<&0 " - duplicates FD 0 (standard input) and stores the new FD into the 10 variable. 
exec 10<&0
# stdin replaced with a file supplied as a first argument
# $1 is called "positional arguments" of the script. Positional parameters are assigned from the shell’s arguments when it is invoked, and may be reassigned using the set builtin command. Positional parameter N may be referenced as ${N}, or as $N when N  consists of a single digit. So in execuing this command "./script.sh Hello World" $0 is script.sh, $1 is Hello and $2 is World
exec < $1
# remember the name of the input file
in=$1

# init
file="current_line.txt"
let count=0

# this while loop iterates over all lines of the file
while read LINE
do
    # increase line counter 
    ((count++))
    # write current line to a tmp file with name $file (not needed for counting)
    echo $LINE > $file
    # this checks the return code of echo (not needed for writing; just for demo)
    # $? is the most recent foreground pipeline exit status.
    if [ $? -ne 0 ] 
     then echo "Error in writing to file ${file}; check its permissions!"
    fi
done

echo "Number of lines: $count"
echo "The last line of the file is: `cat ${file}`"

# restore stdin from filedescriptor 10
# and close filedescriptor 10
exec 0<&10 10<&-
