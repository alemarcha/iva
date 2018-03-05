#!/bin/sh      
ssh opencga@192.168.145.33 <<EOF        
  cd /opt/apps/iva/jenkins/
  git clone https://github.com/babelomics/iva.git iva                                                     │
  cd /opt/apps/iva/jenkins/iva                                                                                    │
  git checkout iva-dev                                                                                    │
  git submodule update --init                                                                             │
  cd /opt/apps/iva/jenkins/iva/lib/jsorolla                                                                       │
  npm install                                                                                             │
  cd /opt/apps/iva/jenkins/iva                                                                                    │
  npm install                                                                                             │
  cd /opt/apps/iva/jenkins/iva                                                                                    │
  npm run build                                                                                           │
  cd /opt/apps/iva/jenkins/                                                                                        │
  cp -r /opt/apps/iva/jenkins/iva/build ./0.9.0_new                                                               │
  rm -r 0.9.0_backup/                                                                                     │
  mv 0.9.0 0.9.0_backup                                                                                   │
  mv 0.9.0_new/ 0.9.0                                                                                     │
  rm -r latest                                                                                            │
  ln -s 0.9.0 latest      
EOF
