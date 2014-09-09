$ ./shared-words --help

  Usage: shared-words [options] <file1> <file2>

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
    -n, --number   Report just the number of words
    -v, --verbose  Be more verbose,
                   report timing information

$ ./shared-words file1.txt file2.txt
programming
code
node
javascript

$ ./shared-words --number file1.txt file2.txt
4 words in common

$ ./shared-words -n -v words1.txt words2.txt
[time] read the files: 3ms
[time] word comparison: 9ms
435 words in common.