import { TitleBox } from "@/components/pages/lobby";
import {
  TeacherFullCard,
  TeacherMiniCard,
} from "@/components/pages/lobby/teachers/teacher-card";
import { FetchErrorAnnouncement } from "@/components/elements/common/error-announcement";

import { teachersTitleBoxDict } from "@/dict/pages/lobby.dict";

import { getAllTeacher } from "@/core/services/api";

import { type Locale } from "#/i18n.config";

export const TeachersSection = async ({ lang }: { lang: Locale }) => {
  const teacherData = await getAllTeacher();

  const shownTeacher = teacherData[0];

  return (
    <section className="relative mt-24">
      <div className="container">
        <TitleBox
          lang={lang}
          title={teachersTitleBoxDict.title}
          desc={teachersTitleBoxDict.subtitle}
        />
        {!teacherData ? (
          <FetchErrorAnnouncement
            place={teachersTitleBoxDict.title}
            lang={lang}
          />
        ) : (
          <div className="flex flex-col items-center gap-7">
            {shownTeacher && (
              <TeacherFullCard lang={lang} data={shownTeacher} />
            )}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {teacherData.slice(1, 5).map((teacher, index) => (
                <TeacherMiniCard key={index} lang={lang} data={teacher} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
