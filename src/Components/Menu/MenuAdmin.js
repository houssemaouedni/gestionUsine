import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { FaWarehouse } from "react-icons/fa";
import { BsClipboard2Plus } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { FaPersonShelter } from "react-icons/fa6";
import { GiProcessor } from "react-icons/gi";

const menu = [
  {
    name: 'Dashboard',
    icon: React.createElement(MdSpaceDashboard),
    link: '/'

  },
  {
    name: 'Produits',
    icon: React.createElement(MdSpaceDashboard),
    subMenu: [
      { name: 'Ajouter Produits', link: '/ajouter-produits' },
      { name: 'Liste des produits en stock', link: '/liste-produits' },
    ],
  },
  {
    name: 'Stocks',
    icon: React.createElement(FaWarehouse),
    subMenu: [
      { name: 'Bon d\'entrée', link: '/bon-entree' },
      { name: 'Bon de transfert', link: '/bon-transfert' },
      { name: 'Bon de sortie', link: '/bon-sortie' },
    ],
  },
  {
    name: 'Commandes',
    icon: React.createElement(BsClipboard2Plus),
    subMenu: [
      { name: 'Bon de Commandes', link: '/commandes' },
      { name: 'Bon de Livraison', link: '/bon-livraison' },
      { name: 'Factures', link: '/factures' },
      { name: 'Bon de retour', link: '/bon-retour' },
      { name: 'Avoir', link: '/avoir' },
      // { name: 'Liste des commandes clients', link: '/liste-commandes' },
      // { name: 'Traitement des commandes en attente', link: '/traitement-commandes' },
    ],
  },
  {
    name: 'Clients',
    icon: React.createElement(BsFillPersonFill),
    subMenu: [
      { name: 'Ajout d\'un nouveau client', link: '/ajouter-client' },
      { name: 'Liste des clients enregistrés', link: '/clients' },
      { name: 'Historique des achats et des commandes', link: '/historique-clients' },
      { name: 'Reglement', link: '/reglement' }
    ],
  },
  {
    name: 'Fournisseurs',
    icon: React.createElement(FaPersonShelter),
    subMenu: [
      { name: 'Créer un nouveau fournisseur', link: '/creer-fournisseur' },
      { name: 'Liste des fournisseurs et des partenaires', link: '/liste-fournisseurs' },
      { name: 'Historique des achats et des commandes', link: '/historique-fournisseurs' },
    ],
  },
  {
    name: 'Fabrication',
    icon: React.createElement(GiProcessor),
    subMenu: [
      { name: 'Ordres de Fabrication', link: '/ordre-fabrication' },
      { name: 'Liste des ordres de Fabrication', link: '/liste-of' },
      { name: 'Statut des ordres de Fabrication', link: '/statut-of' },
    ],
  },
];

export default menu