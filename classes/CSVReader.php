<?php 
    class CSVReader{
        function __construct(string $file_path){
            if(file_exists($file_path)){
                $this->read_csv($file_path);
            }
        }
        private function read_csv(string $fpath): array{
            $response =Array();
            $response['path'] =$fpath;
            return $response;
        }
    } 
?>