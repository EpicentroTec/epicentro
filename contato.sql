DROP TABLE IF EXISTS `epicentro`.`contato`;
CREATE TABLE  `epicentro`.`contato` (
  `idcontato` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `assunto` varchar(155) NOT NULL,
  `mensagem` varchar(1024) NOT NULL,
  PRIMARY KEY (`idcontato`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;