'use client'
import { CustomToggler } from "@/components/common";
import { VisitorEnum } from "@/domain";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";
import { GiDoctorFace, GiHealthCapsule } from "react-icons/gi";

const ContentParagraph = ({children}: {children: ReactNode}) => <p className="text-xl leading-relax max-w-md tracking-tight text-muted-foreground text-left font-light">
                  {children}
                </p>

export const HeroToggler = () => {
  const t = useTranslations('home.hero');
  return <CustomToggler<VisitorEnum>
                  initialToggleType={VisitorEnum.PATIENT}
                  togglerItems={[
                    {
                      title: t('patient.title'),
                      tag: VisitorEnum.PATIENT,
                      Icon: GiHealthCapsule,
                      content: <ContentParagraph>{t('patient.description')}</ContentParagraph>
                    },
                    {
                      title: t('prescriber.title'),
                      tag: VisitorEnum.PRESCRIBER,
                      Icon: GiDoctorFace,
                      content: <ContentParagraph>{t('prescriber.description')}</ContentParagraph>
                    },
                  ]}
                />
}
