import { MigrationInterface, QueryRunner } from "typeorm";
import { Agency } from "../../entity/Agency";

export class Seed1701179133882 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const AGENCY_NAMES = [
      "A*Star",
      "A*STAR Companies",
      "ACRA",
      "AGD Pensions Branch",
      "Attorney-General's Chambers",
      "Auditor-General's Office",
      "Board of Architects",
      "Building & Construction Authority",
      "Central Provident Fund",
      "Civil List for President",
      "Civil Service College",
      "Competition and Consumer Comm",
      "Council for Estate Agencies",
      "Civil Aviation Authority of Singapore",
      "Defence Science & Tech Agency",
      "Economic Development Board",
      "Energy Market Authority",
      "Enterprise Singapore",
      "Gambling Regulatory Authority",
      "GovTech",
    ];
    AGENCY_NAMES.map(async (agencyName) => {
      await queryRunner.manager
        .createQueryBuilder()
        .insert()
        .into(Agency)
        .values({ name: agencyName })
        .execute();
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
