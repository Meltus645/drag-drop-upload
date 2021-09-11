<?php 
    class Connection{
        private const HOST ='localhost';
        private const USER ='root';
        private const PASS ='';
        private const _DB_ ='resultshub';

        public function connect (object $connection): object{
            return $connection;
        }
    }
?>