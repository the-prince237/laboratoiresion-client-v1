'use client'
import { CustomToggler } from "@/components/common";
import { VisitorEnum } from "@/domain";
import { ReactNode } from "react";
import { BsSafe } from "react-icons/bs";
import { GiDoctorFace, GiHealthCapsule } from "react-icons/gi";

const ContentParagraph = ({children}: {children: ReactNode}) => <p className="text-lg leading-tight max-w-md tracking-tight text-muted-foreground text-left">
                  {children}
                </p>

export const HeroToggler = () => <CustomToggler<VisitorEnum>
                  initialToggleType={VisitorEnum.PATIENT}
                  togglerItems={[
                    {
                      title: 'Patient',
                      tag: VisitorEnum.PATIENT,
                      Icon: GiHealthCapsule,
                      content: <ContentParagraph>Analyses biologiques et imagerie médicale fiables, rapides et confidentielles — pour des résultats clairs et un suivi serein.</ContentParagraph>
                    },
                    {
                      title: 'Prescripteur',
                      tag: VisitorEnum.PRESCRIBER,
                      Icon: GiDoctorFace,
                      content: <ContentParagraph>Le Laboratoire Sion soutient les médecins prescripteurs avec des diagnostics précis et un partage rapide des résultats.
Fiabilité, rigueur scientifique et collaboration au service du patient.</ContentParagraph>
                    },
                  ]}
                />