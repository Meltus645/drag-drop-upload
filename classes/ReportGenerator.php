<?php
    class ReportGenerator{
        function __construct(array $data){
            print_r($data);
            if(True){
                // generate the pdf
            }
        }
        public function process_data(array $raw_data): array{
            
            return $raw_data;
        }
    }
    $data =[0,1,2];
    new ReportGenerator($data =$data);
?>